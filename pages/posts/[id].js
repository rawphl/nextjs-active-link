import { useRouter } from "next/router"

export default function PostsDetail() {
    const router = useRouter()
    const { id }= router.query
    return (
        <div>
            <h1>Posts detail {id}</h1>
        </div>
    )
}