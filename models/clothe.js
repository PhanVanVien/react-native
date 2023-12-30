class Clothe {
  constructor(
    id,
    categoryIds,
    title,
    description,
    material,
    processing,
    price,
    image,
    favorite
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.description = description;
    this.material = material;
    this.processing = processing;
    this.price = price;
    this.image = image;
    this.favorite = favorite;
  }
}

export default Clothe;
