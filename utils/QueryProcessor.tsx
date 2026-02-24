export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "Jose German";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "josegerm"
  }

  if (query.toLowerCase().includes("numbers is the largest")) {
    const matches = query.match(/\d+/g);

    if (matches) {
      const numbers = matches.map(Number);
      const largest = Math.max(...numbers);

      return `${largest}`;
    }
    return "Please give numbers.";
  }

  if (query.toLowerCase().includes("plus")) {
    const matches = query.match(/\d+/g);

    if (matches) {
      const numbers = matches.map(Number);
      const sum = numbers.reduce((acc, curr) => acc + curr, 0);

      return `${sum}`;
    }
    return "Please give numbers.";
  }

  if (query.toLowerCase().includes("square and a cube")) {
    const matches = query.match(/\d+/g);

    if (matches) {
      const numbers = matches.map(Number);
      const result = numbers.filter((n) => {
        const sqRoot = Math.sqrt(n);
        const cbRoot = Math.pow(n, 1/3);
        const isSquare = Math.round(sqRoot) ** 2 === n;
        const isCube = Math.round(cbRoot) ** 3 === n;
        return isSquare && isCube
      })
      const sum = numbers.reduce((acc, curr) => acc + curr, 0);

      return `${result}`;
    }
    return "Please give numbers.";
  }

  if (query.toLowerCase().includes("multiplied")) {
    const matches = query.match(/\d+/g);
    if (matches) {
      const numbers = matches.map(Number);
      const product = numbers.reduce((acc, curr) => acc + curr, 1);

      return `${product}`;
    }
    return "Please give numbers.";
  }

  return "";
}
