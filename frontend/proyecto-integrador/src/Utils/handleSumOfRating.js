export const handleSumOfRating = (ratings) => {
    let count = 0;
    ratings?.forEach((rating) => {
        count += rating.rating;
    });
    return count;
}