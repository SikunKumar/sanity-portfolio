import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getServerSideProps() {
  const data = await getProfile();

  return {
    props: {
      data,
    },
    revalidate: 60, // Number of seconds before a page re-generation
  };
}

// Using GROQ all the data were get.

export async function getProfile() {
  
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      fullName,
      headline,
      profileImage {alt, "image": asset->url},
      shortBio,
      location,
      fullBio,
      email,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
      skills
    }`
  );
  
}

export async function getJob() {
  return client.fetch(
    groq`*[_type == 'job'] {
      _id,
      name,
      jobTitle,
      'logo': logo.asset->url,
      url,
      description,
      startDate,
      endDate,
    }`
  );
}


export async function getProject() {
  return client.fetch(
    groq`*[_type == 'project']{
      _id,
      name,
      'slug': slug.current,
      tagline,
      'logo': logo.asset -> url,
    }`
  )
}

export async function getSingleProject(slug: string) {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      name,
      projectUrl,
      coverImage { alt, "image": asset->url },
      tagline,
      description
    }`,
    { slug }
  );
}
