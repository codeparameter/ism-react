import { Route, Routes, Link } from "react-router-dom";
import BlockCerate from "./BlockCreate";


export default function AdminBlock() {

    return (
      <div className="">
        admin blocks... <br />

        <Link to="create/">
          create
        </Link>

        
        <Routes>
            <Route path="create/" element={<BlockCerate/>} />
        </Routes>
      </div>
    );
}
