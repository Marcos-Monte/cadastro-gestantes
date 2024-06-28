// Mostrar os dados no Navegador
import styles from '@/styles/ShowSheetData.module.css';

import { useEffect, useState } from 'react';

import Registro from './Registro';

export default function ShowSheetData(){

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('/api/getSheetData');
                
                if (!response.ok) {
                throw new Error('Failed to fetch data');
                }

                const result = await response.json();
                setData(result);

            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();

    }, []);

    if (error) return <div>Error: {error}</div>;

    return (

        <div className={styles.listas}>

                {data.map(
                    (item, index) => (

                        <Registro 
                            key={index}
                            conteudo={JSON.stringify(item)}
                        />

                        )
                    )
                }

        </div>
    );
};
