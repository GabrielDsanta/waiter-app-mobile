import { Center, Spinner } from "native-base";

export function Loading(){
    return(
        <Center flex={1}>
            <Spinner color='rgba(219, 27, 27, 0.8)' />
        </Center>
    )
}