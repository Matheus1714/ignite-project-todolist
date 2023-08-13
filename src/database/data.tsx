import { Task } from "../components/ListTask"
import { v4 as uuidv4 } from 'uuid'

export const data:Task[] = [
    {
        id: uuidv4(),
        content: 'Integer urna interdum ',
        isComplete: false
    },
    {
        id: uuidv4(),
        content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
        isComplete: false
    },
    {
        id: uuidv4(),
        content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
        isComplete: false
    },
    {
        id: uuidv4(),
        content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
        isComplete: true
    },
    {
        id: uuidv4(),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cum nihil et hic illo adipisci assumenda magnam qui illum vero, nam quae reprehenderit laudantium mollitia error deserunt quidem rerum officiis?',
        isComplete: true
    },
]

