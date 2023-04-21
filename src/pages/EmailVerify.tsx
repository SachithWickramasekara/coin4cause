import axios from "axios";
import { useState, useEffect, Fragment} from 'react';
import { Link, useParams } from 'react-router-dom';

type Props = {}

const EmailVerify = (props: Props) => {

    const [validUrl, setValidUrl] = useState(false);
    const params = useParams();

    useEffect(() => {
        const verifyEmailUrl = async () => {
            try {
                const url = `https://coin4cause-server.vercel.app/users/${params.id}/verify/${params.token}`;
                const data = await axios.get(url);
                console.log(url);
                console.log(data);
                setValidUrl(true);
                
            } catch (error) {
                console.log(error);
                setValidUrl(false);
            }
        };
        verifyEmailUrl();
    }, [params]);

  return (
    <Fragment>
            {validUrl ? (
                <div>
                    <h1> USER VERIFIED</h1>

                </div>
            ): (
                
                <h1> 404 Not Found ${validUrl}</h1>
            )}
        </Fragment>
  )
}

export default EmailVerify