import fetch from "node-fetch";

const fillCik = (cik) => {
    return cik.toString().padStart(10, '0'); 
};

export const getSubmission = ( cik ) => {
    return fetch( `http://data.sec.gov/submissions/CIK${fillCik(cik)}.json` );
}

export const getCompanyFacts = ( cik ) => {
    return fetch( `https://data.sec.gov/api/xbrl/companyfacts/CIK${fillCik(cik)}.json` );
}