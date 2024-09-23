import { Box ,styled,FormControl, InputBase,Button} from '@mui/material'; 
import { AddCircle as Add } from '@mui/icons-material';


const Container = styled(Box)`
    margin: 50px 100px`

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});

const StyledFormControl = styled(FormControl)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`;
const InputTextField = styled(InputBase)`
    flex: 1;
    margin: 0 30px;
    font-size: 25px;
`;


const CreatePost = () => {
    const url='https://img.freepik.com/free-photo/blue-surface-with-study-tools_23-2147864592.jpg';
    return(
        <Container> 
            <Image src={url} alt="banner"/>

            <StyledFormControl>
                <label htmlFor="fileInput">
                    <Add fontSize="large" color="action" />
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    // onChange={(e) => setFile(e.target.files[0])}
                />

                <InputTextField placeholder="Title"/>
                <Button variant='contained'>Publish</Button>
              
            </StyledFormControl>
        </Container>
    )
}
export default CreatePost;