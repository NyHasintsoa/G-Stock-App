function matchSecuredUrl(url, securedRequests) {
  for (const req of securedRequests) {
    const regexString =
      "^" + req.replace(/\*\*/g, ".*").replace(/\//g, "\\/") + "$";
    const regex = new RegExp(regexString);
    if (regex.test(url)) {
      return true;
    }
  }
  return false;
}

export { matchSecuredUrl };
