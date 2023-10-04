import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.poap.tech/",
  headers: {
    "X-API-KEY": "MmClnHY37oiqAU4C0HHSy02JshTsxAzSzQ5ZEqpb7XAeFUPc0DNTLD1sL7lxHIQyOb9c5pY5DizcGs8blLstpkUtjrsP4hoOIlasVtnAQ50mWFuQ36qefNB0cwZmBvSp",
    Accept: "application/json"
  }
});
