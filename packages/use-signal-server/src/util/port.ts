import {wait} from '@augment-vir/common';
import {buildUrl} from 'url-vir';

export async function findActivePort(
    {
        hostname,
        maxPortScanDistance,
        startingPort,
        path,
    }: {
        hostname: string;
        startingPort: number;
        path?: string;
        maxPortScanDistance: number;
    },
    isValidCallback: (response: Response) => boolean = () => true,
): Promise<number> {
    await wait(200);
    let port: number = startingPort;

    while (port < startingPort + maxPortScanDistance) {
        const url = buildUrl({
            protocol: 'http',
            hostname,
            pathname: path,
            port,
        });
        await wait(100);

        try {
            const response = await fetch(url.href);

            if (response.ok && isValidCallback(response)) {
                return port;
            }
        } finally {
            port++;
        }
    }

    throw new Error(
        `Reached max scan distance ('${maxPortScanDistance}') from starting port ('${startingPort}') without finding any active ports.`,
    );
}
