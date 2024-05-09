import { loadingTypes } from '../../utils';

export const Loading = (props: { type: string }) => {
    const { type } = props;
    let message = 'Loading...';

    switch (type) {
        case loadingTypes.comics:
            message = 'Comics list loading...';
            break;

        case loadingTypes.comic:
            message = 'Select a comic book first.';
            break;
        
        default:
    }
    return <p>{message}</p>;
};
