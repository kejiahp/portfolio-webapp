import { StaticImageData } from "next/image"

export type ContactFormInput = {
    name: string,
    email: string,
    message: string,
}

export type RequestCv = {
    email: string,
    reason?: string
}

export type Spinner = {
    loading: boolean
}

export type SingleProject = {
    image: StaticImageData,
    projectLink: string,
    githubLink: string,
    techUsed: string[],
    name: string
  };