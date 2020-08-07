import {TodoTag} from '../models/todo-tag';

export class ItemGenerator {
    public static createTag(title: string): TodoTag {
        return { title, color: this.generateColor() };
    }

    public static createTitle(): string {
        const num = this.getRandomInt(5);
        switch (num) {
            case 0:
                return 'Moscow';
            case 1:
                return 'Berlin';
            case 2:
                return 'Stockholm';
            case 3:
                return 'Helsinki';
            case 4:
                return 'London';
            default:
                return 'Paris';
        }
    }

    private static generateColor(): string {
        const num = this.getRandomInt(3);
        switch (num) {
            case 0:
                return 'primary';
            case 1:
                return 'accent';
            case 2:
                return 'warn';
            default:
                return 'accent';
        }
    }

    private static getRandomInt(max: number): number {
        return Math.floor(Math.random() * Math.floor(max));
    }
}
