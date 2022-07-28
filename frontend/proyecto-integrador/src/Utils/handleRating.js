const randomNum = () => Math.floor(Math.random() * (5 - 3 + 1) + 3);

export const randomRatings = Array(4)
    .fill("_").map(() => {
    return {rating:randomNum()}
})

