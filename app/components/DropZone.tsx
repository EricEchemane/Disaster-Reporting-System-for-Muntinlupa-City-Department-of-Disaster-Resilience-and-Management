/* eslint-disable @next/next/no-img-element */
import { Group, Stack, Text, useMantineTheme } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';

interface DropImageProps extends DropzoneProps {
    imgsrc: string;
    error: string | null | undefined;
}

export default function DropZoneComponent(props: Partial<DropImageProps>) {
    const theme = useMantineTheme();
    return (
        <Dropzone
            color='red'
            style={{ border: props.error ? '2px solid red' : '2px solid transparent' }}
            onDrop={(files) => console.log('accepted files', files)}
            onReject={(files) => console.log('rejected files', files)}
            maxSize={3 * 1024 ** 2}
            accept={IMAGE_MIME_TYPE}
            {...props}
            multiple={false}
        >
            <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
                <Dropzone.Accept>
                    <IconUpload
                        size={50}
                        stroke={1.5}
                        color={theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]}
                    />
                </Dropzone.Accept>
                <Dropzone.Reject>
                    <IconX
                        size={50}
                        stroke={1.5}
                        color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
                    />
                </Dropzone.Reject>
                {props.imgsrc === '' && <Dropzone.Idle>
                    <IconPhoto size={50} stroke={1.5} />
                </Dropzone.Idle>}
                {props.imgsrc !== '' ?
                    <Stack align={'center'}>
                        <img
                            id='image'
                            src={props.imgsrc}
                            alt="soil image"
                            style={{ height: '100%' }} />
                        <Text align='center'>  Click again to choose different one </Text>
                    </Stack>
                    : <div>
                        <Text size="xl" inline>
                            Attach a photo of the incident you want to report
                        </Text>
                        <Text size="sm" color="dimmed" inline mt={7}>
                            Drag image here or click to select file
                        </Text>
                    </div>}
            </Group>
        </Dropzone>
    );
}