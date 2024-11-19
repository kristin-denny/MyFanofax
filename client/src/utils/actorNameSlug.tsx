
const createSlug = (name: string): string => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .trim(); // Trim leading/trailing whitespace
  };
  
  const revertSlug = (slug: string): string => {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  // Group export at the bottom
  export { createSlug, revertSlug };
  
  // Example Usage of createSlug:
  //const actorName = "Robert Downey Jr.";
  //const slug = createSlug(actorName);
  //console.log(slug); // Output: "robert-downey-jr"
  