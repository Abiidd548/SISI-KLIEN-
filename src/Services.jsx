export const getPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error("[Services] Gagal mengambil data post:", error.message);
    throw error;
  }
};

export const getUsers = async () => {
  const city = "Jakarta";
  const street = "Jl Kebon Jeruk";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const users = await response.json();
    return users.map((user) => ({
      name: user.name,
      email: user.email,
      city,
      street,
    }));
  } catch (error) {
    console.error("[Services] Gagal mengambil data user:", error.message);
    throw error;
  }
};