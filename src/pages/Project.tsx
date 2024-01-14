import { useParams, Params } from "react-router-dom"


export default function Project() {
	const params : Params = useParams()
	console.log(params)

	return (
		<h1>Project: {params.p}</h1>
	)
}
