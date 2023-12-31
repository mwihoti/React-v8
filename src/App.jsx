import { createRoot } from "react-dom/client";
import AdoptedPetContext from "./AdoptedPetContext";
import SearchParams from "./SearchParams";
import Details from "./Details";
import {Link, BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const queryClient = new QueryClient({
  defaultOptions:{
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity
    }
  }
})

const App = () => {
  const adoptedPet = useState(null);
  return(
    <div>
  <BrowserRouter>
  <QueryClientProvider client={queryClient}>
  <AdoptedPetContext.Provider value={adoptedPet}>
  <header>
    <Link to="/">Adopt me!</Link>
    </header>

    <Routes>
      <Route path="/details/:id" element={<Details />}/>
      <Route path="/" element={<SearchParams/>}/>
    </Routes>
    </AdoptedPetContext.Provider>

    </QueryClientProvider>
  </BrowserRouter>
  </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
