const contentful = require("contentful");
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "kcg48qn7fm7t",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "ow4BOwxr27GB7c46JiyurAeFa01PcMIeYZqIvqsnYg8"
});

export async function getContent(){
    const response =  await client.getEntries()
    const post = {
        title : response.items[0].fields.title,
        subTitle: response.items[0].fields.subtitle,
        image: response.items[0].fields.image.fields.file.url
    }
    console.log(post)
    return post
}