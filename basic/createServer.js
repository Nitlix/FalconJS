
import express from 'express';
import cors from 'cors';


export default function createServer(useCors="*"){

    const app = express();
    
    app.disable('x-powered-by');


    app.use(cors({
        origin: useCors
    }));

    app.use((req, res, next) => {
        res.append('x-powered-by', 'FalconJS')
        next();
    });
    


    return app;


}