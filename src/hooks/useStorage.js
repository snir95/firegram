import {useEffect ,usestate} from React;
import {projectStorage} from '../firebase/config';
import { useState } from 'react';

const useStorage = (file) => 
{
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect( () =>
    {
        //references
        const storageRef = projectStorage.ref(file.name)

        storageRef.put(file).on('stateChange', (snap)=>
        {
            let percentage = (snap.byteTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {

        setError(err)
    })
    },[file])


}