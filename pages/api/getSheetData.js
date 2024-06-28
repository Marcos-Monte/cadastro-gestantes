// const bd = 'https://sheetdb.io/api/v1/pexqrnjxmcmxj'

// pages/api/getSheetData.js

export default async function handler(req, res) {

    const SHEETDB_API_URL = 'https://sheetdb.io/api/v1/pexqrnjxmcmxj'; // Substitua pelo seu ID do SheetDB
    
    try {

        const response = await fetch(SHEETDB_API_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
    
        const data = await response.json();
        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({ message: error.message });
        }
}



