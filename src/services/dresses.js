// services/dresses.js

const baseURL = 'http://localhost:3000/dresses_ambar/vestidos/';

// Fetch all dresses
export const getAllDresses = async () => {
  try {
    const response = await fetch(baseURL);
    if (!response.ok) throw new Error('Network response was not ok.');
    return await response.json();
  } catch (error) {
    console.error('There was a problem fetching dresses:', error);
  }
};

// Fetch a single dress by ID
export const getDressById = async (id) => {
  try {
    const response = await fetch(`${baseURL}${id}`);
    if (!response.ok) throw new Error('Network response was not ok.');
    return await response.json();
  } catch (error) {
    console.error(`There was a problem fetching dress with id ${id}:`, error);
  }
};

// Create a new dress
export const createDress = async (dressData) => {
  try {
    const response = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dressData),
    });
    if (!response.ok) throw new Error('Network response was not ok.');
    return await response.json();
  } catch (error) {
    console.error('There was a problem creating the dress:', error);
  }
};

// Update an existing dress
export const updateDress = async (id, dressData) => {
  try {
    const response = await fetch(`${baseURL}${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dressData),
    });
    if (!response.ok) throw new Error('Network response was not ok.');
    return await response.json();
  } catch (error) {
    console.error(`There was a problem updating dress with id ${id}:`, error);
  }
};

// Delete a dress
export const deleteDress = async (id) => {
  try {
    const response = await fetch(`${baseURL}${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Network response was not ok.');
    return await response.json();
  } catch (error) {
    console.error(`There was a problem deleting dress with id ${id}:`, error);
  }
};

