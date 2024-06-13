export const getRefName = (str) => str.replace("-", " ");

export const formatRefName = (str) => str.replace(" ", "-");

export const capitalizeFirstLetter = (str) => str[0].toUpperCase() + str.slice(1);

export const reduceAmountOfText = (str, length = 0) => {
  const words = str.split(" ");
  return words.length <= length ? str : words.slice(0, length).join(" ");
};

export const formatTitle = (str) => str.split(" ").slice(0, 5).join(" ");

export function formatCurrency(value) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  }).format(value);
}
