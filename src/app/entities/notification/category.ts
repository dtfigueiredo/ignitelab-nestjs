//VALUE OBJECT FILES
export class Category {
  private readonly category: string;

  constructor(category: string) {
    const isCategoryLengthValid = this.validateCategoryLength(category);

    if (!isCategoryLengthValid) {
      throw new Error(`Invalid category length. Length: ${category.length}`);
    }

    this.category = category;
  }

  get value(): string {
    return this.category;
  }

  private validateCategoryLength(category: string): boolean {
    return category.length >= 5 && category.length <= 20;
  }
}
