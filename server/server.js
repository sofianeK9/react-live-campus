import express from "express";

const app = express();

app
.use(helmet())
.use(helmet.contentSecurityPolicy())
.use(helmet.hidePoweredBy())
.use(express.urlencoded({extended: true}))
.use(bodyParser.json())
.use(morgan(':remote-addr - :method :url :status :res[content-length] - :response-time ms'))
.use('/api', api)