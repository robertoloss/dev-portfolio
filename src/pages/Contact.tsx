import AnimationWrapper from '@/components/AnimationWrapper';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { usePage } from '@/utils/usePage';
import CursorFollower from '@/components/CursorFollower';
import { cn } from '@/lib/utils';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
	const nameInputRef = useRef<HTMLInputElement>(null)
	const emailInputRef = useRef<HTMLInputElement>(null)
	const messageInputRef = useRef<HTMLTextAreaElement>(null)
	const captchaRef = useRef<ReCAPTCHA | null>(null)
	const [copied, setCopied] = useState(false)
	const [submitted, setSubmitted] = useState(false)
	const [_nameFocus, setNameFocus] = useState(false)
	const [_emailFocus, setEmailFocus] = useState(false)
	const [_messageFocus, setMessageFocus] = useState(false)
	const [showReCaptcha, setShowReCaptcha] = useState(false)
	const { pageOpen, setPageOpen, mobile } = usePage()
	const location = useLocation()
	
	useEffect(()=>{
		setPageOpen(true)
	},[setPageOpen,location])

  const recaptchaOnChange = () => {
    emailjs.sendForm(	process.env.EMAILJS_SERVICE_ID!,
											process.env.EMAILJS_TEMPLATE_ID!, 
											form.current!, 
											process.env.EMAILJS_PUBLIC_KEY!)
		.then((result) => {
				console.log(result.text);
		}, (error) => {
				console.log(error.text);
		});
		setSubmitted(true)
		if (nameInputRef.current) nameInputRef.current.value = ""
		if (emailInputRef.current) emailInputRef.current.value = ""
		if (messageInputRef.current) messageInputRef.current.value = ""
  };

  function buttonHandler() {
		setShowReCaptcha(true)
	}

	function nameLabelHandler() {
		nameInputRef.current?.focus()
		setNameFocus(true)
	}
	function emailLabelHandler() {
		emailInputRef.current?.focus()
		setEmailFocus(true)
	}
	function messageLabelHandler() {
		messageInputRef.current?.focus()
		setMessageFocus(true)
	}

	function inputClassName(input: "nameOrEmail" | "message") : string {
		const common = `
      flex flex-col items-center px-4 py-6 rounded-sm border-2 border-border dark:bg-muted
			focus:outline-none focus:ring-0 focus:border-primary  focus:border-2 dark:text-primary
    `
		const specific = {
			nameOrEmail: ' h-13 ',
			message:  ' h-20 ',
		}
		return specific[input] + common
	}

	window.scrollTo(0,0)
	async function copyToClipboard() {
		if (navigator.clipboard && window.isSecureContext) {
			try {
				await navigator.clipboard.writeText('robertoloss@gmail.com')
				console.log('Text copied to clipboard successfully!');
				setCopied(true)
				setTimeout(()=>{setCopied(false)}, 2000)
			} catch(err) {
				console.error('Failed to copy text to clipboard: ', err);
			}
		}
	}

  const labelTailwind = [
    'flex absolute top-[26px] z-10 ml-[18px] font-normal', 
    "transition-all ease-out duration-100 dark:text-muted-foreground",
    "peer-focus:top-[10px] peer-focus:text-xs", 
  ]
  const inputFilledTailwind = "top-[10px] text-xs"

  return (<div className='min-h-screen'>
		<AnimationWrapper pageOpen={pageOpen} mobile={mobile}>
      <CursorFollower/>
			<div className='flex flex-col w-full items-center md:items-start py-8 gap-y-10 
				sm:py-8 sm:gap-y-10 min-h-[calc(100vh-290px)]'>
				<h1 className="text-4xl font-thin"
								style={{fontFamily: "Fira Code"}}> Contact </h1>
				<p className='w-full max-w-[640px] text-center md:text-left text-lg'>
					If you'd like to get in touch, you can either use the form below or send me an email to&nbsp;
					<span 
						className='relative w-full transition-all hover:text-blue-400 text-lg underline text-blue-500 cursor-pointer' 
						onClick={copyToClipboard}
					>
						robertoloss@gmail.com
						{copied && (
							<div className="absolute flex flex-row justify-center left-1/2 transform 
								-translate-x-1/2 mt-1 text-sm text-green-500 w-full"
							>
								Copied to clipboard! 👍
							</div>
						)}
					</span> 
				</p>
					<div className='flex flex-col w-full max-w-[640px]'>
						<form 
							ref={form} 
							onSubmit={(e)=>e.preventDefault()} 
							className='flex flex-col w-full gap-y-4 dark:text-background'
						>
							<div className='flex relative flex-col'>
								<input 
									ref={nameInputRef}
									type="text"
									name="user_name"
									className={'peer' + inputClassName("nameOrEmail")}
									onFocus={()=>setNameFocus(true)}
									onBlur={()=>setNameFocus(false)}
								/>
								<label 
                  className={cn(
                    ...labelTailwind,
                    {
                      [inputFilledTailwind]: nameInputRef.current?.value
                    }
                  )}
									onClick={nameLabelHandler}
								> 
									Name 
								</label>
							</div>
							<div className='flex relative flex-col'>
								<input 
									ref={emailInputRef}
									type="email"
									name="user_email"
									className={'peer' + inputClassName("nameOrEmail")}
									onFocus={()=>setEmailFocus(true)}
									onBlur={()=>setEmailFocus(false)}
								/>
								<label 
                  className={cn(
                    ...labelTailwind,
                    {
                      [inputFilledTailwind]: emailInputRef.current?.value
                    }
                  )}
									onClick={emailLabelHandler}
								> 
									Email 
								</label>
							</div>

							<div className='flex relative flex-col'>
								<textarea 
									ref={messageInputRef}
									name="message"
									className={"peer" + inputClassName("message")}
									onFocus={()=>setMessageFocus(true)}
									onBlur={()=>setMessageFocus(false)}
								/>
								<label 
                  className={cn(
                    ...labelTailwind,
                    {
                      [inputFilledTailwind]: messageInputRef.current?.value
                    }
                  )}
									onClick={messageLabelHandler}
								> 
									Message 
								</label>
							</div>
						<div className='h-12 flex flex-col items-center justify-center'>
							{(showReCaptcha && !submitted) && 
								<h1 className='text-foreground'>
									Click on the reCAPTCHA to send the email 
								</h1>
							}
							{submitted && <h1 className='py-1 px-2  font-semibold dark:text-foreground'>Email Sent!</h1>}
							{!showReCaptcha && 
								<button
									className="py-2 px-2  bg-background border-foreground border
										hover:bg-muted hover:border-foreground hover:border 
										 transition-[background-color] w-[96px]
										self-center rounded-[4px] text-foreground font-light cursor-pointer hover:text-foreground
										"
									onClick={buttonHandler}
								>
									Send 
								</button>
							}
						</div>
						{(showReCaptcha && !submitted) &&
							<div className='flex flex-col self-center'>
								<div className='flex w-[300px] h-[74px] bg-gray-100 border rounded-s border-gray-300 animate-pulse'/>
								<ReCAPTCHA 
									ref={captchaRef}
									sitekey={process.env.CAPTCHA_SITE_KEY!}
									onChange={recaptchaOnChange}
									className='self-center -mt-[74px] z-20'
								/>
							</div>
						}
					</form>
				</div>
				</div>
			</AnimationWrapper>
		</div>
  );
}
