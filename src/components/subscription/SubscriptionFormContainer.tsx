import Subscription from "@/core/models/Subscription";
import Container from "../shared/Container";
import SubscriptionFormArea from "./SubscriptionFormArea";

interface SubscriptionFormContainerProps {
    onReturnClick: () => void
    onSuccess: (subscription: Subscription) => void
}

export default function SubscriptionFormContainer(props: SubscriptionFormContainerProps) {
    return (
        <Container>
            <SubscriptionFormArea 
                onReturnClick={props.onReturnClick} 
                onSuccess={props.onSuccess}
            />
        </Container>
    )
}