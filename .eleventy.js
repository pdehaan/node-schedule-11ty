module.exports = eleventyConfig => {
  eleventyConfig.addFilter("isoString", isoString);
  eleventyConfig.addFilter("localeDateString", localeDateString);
  eleventyConfig.addShortcode(
    "time",
    date =>
      `<time datetime="${isoString(date)}">${localeDateString(date)}</time>`
  );
};

function isoString(date) {
  return new Date(date).toISOString();
}

function localeDateString(date, dateStyle = "full") {
  return new Date(date).toLocaleDateString([], { dateStyle });
}
