
import { createBrowserRouter } from "react-router-dom";
import privateRouter from "./priveteRouter";
import publicRouter from "./publicRouter";



//  create router 
const router = createBrowserRouter([...privateRouter, ...publicRouter ]);

// export default
export default router;