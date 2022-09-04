const client = require("contentful").createClient({
  space: "n5ikxx5xrew0",
  accessToken: "cJjwpvExFRC_WzLQUTPWnwCay31jH6KfMjcxZqYzHwY",
});

const getIntroductionData = () =>
  client
    .getEntries({ content_type: "introductionData" })
    .then((response) => response.items);

const getProjectsData = () =>
  client
    .getEntries({ content_type: "portfolio" })
    .then((response) => response.items);

export { getIntroductionData, getProjectsData };
