//VALUE OBJECT FILES
export class RecipientId {
  private readonly recipientId: string;

  constructor(recipientId: string) {
    const isRecipientIdUUID = this.validateRecipientIdUUID(recipientId);

    if (!isRecipientIdUUID) {
      throw new Error(`RecipientId ${recipientId}, is not an UUID key.`);
    }

    this.recipientId = recipientId;
  }

  get value(): string {
    return this.recipientId;
  }

  private validateRecipientIdUUID(recipientId: string): boolean {
    const regexExp =
      /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;

    return regexExp.test(recipientId);
  }
}
