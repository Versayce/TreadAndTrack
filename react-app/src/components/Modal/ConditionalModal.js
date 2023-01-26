import { useSelector } from "react-redux";


// TODO Create components that render based on available data being sent from state (useSelector)
function ConditonalModal() {
    const visibleStatus = useSelector(state => state.modal.status)
    const paramObj = useSelector(state => state.modal.params)


    // TODO add logic for changing which modal component renders depending on what parameter props are being passed
    const RenderComponent = (params) => {
        switch (params) {

            case params.firstCase: //specify which params are required to render contents
                {
                    
                }

        };
    };



    return (
        <Container modalParams={}>
            
            {
                <form>
                    <input></input>
                </form>
            };

        </Container>
    );
};

const Container = styled.div`

`

export default ConditonalModal
