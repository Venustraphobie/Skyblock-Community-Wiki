import type {ReactNode} from 'react';

export default function Image(props: React.ComponentProps<'img'>): ReactNode {
    return (
        <img {...props} src={ require("@site/static/" + props.src).default }></img>
    )
}