import Image from "next/image"
import Link from "next/link"
import { getProject } from "@/sanity/sanity.query"
import type { ProjectType } from "@/types"


export default async function Project() {
    const projects: ProjectType[] = await getProject();

    return (
        <main className="max-w-7xl mx-auto md:px-16 px-6">
            
        </main>
    )
    
}