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

function transformToRegex(url) {
  return new RegExp(url.replace(/\//g, "\\/") + ".*");
}

export { matchSecuredUrl, transformToRegex };
