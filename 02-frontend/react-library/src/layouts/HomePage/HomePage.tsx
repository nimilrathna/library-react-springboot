import { Carousel } from "./components/Carousel";
import { ExploreTopBooks } from "./components/ExporeTopBooks";
import { Heros } from "./components/Heros";
import { LibraryServices } from "./components/LibraryServices";

export const HomePage = () =>{
    return (
        <>
            <ExploreTopBooks/>
              <Carousel/>
              <Heros/>
              <LibraryServices/>
        </>
    );
} 