import { Replace } from '@helpers/replace';
import { randomUUID } from 'node:crypto';

import { Category } from './category';
import { Content } from './content';
import { RecipientId } from './recipientId';

//
export interface NotificationProps {
  recipientId: RecipientId;
  content: Content;
  category: Category;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = { ...props, createdAt: props.createdAt ?? new Date() };
  }

  //id
  public get id(): string {
    return this._id;
  }

  //recipientId
  public set recipientId(recipientId: RecipientId) {
    this.props.recipientId = recipientId;
  }
  public get recipientId(): RecipientId {
    return this.props.recipientId;
  }

  //content
  public set content(content: Content) {
    this.props.content = content;
  }
  public get content(): Content {
    return this.props.content;
  }

  //category
  public set category(category: Category) {
    this.props.category = category;
  }
  public get category(): Category {
    return this.props.category;
  }

  //readAt
  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt;
  }
  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  //createdAt
  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
