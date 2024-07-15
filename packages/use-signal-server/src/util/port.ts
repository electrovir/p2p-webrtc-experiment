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
    let port: number = startingPort;

    while (port < startingPort + maxPortScanDistance) {
        const url = buildUrl({
            hostname,
            pathname: path,
            port,
        });

        try {
            const response = await fetch(url.href);

            if (response.ok && isValidCallback(response)) {
                return port;
            }
        } finally {
            continue;
        }
    }

    throw new Error(
        `Reached max scan distance ('${maxPortScanDistance}') from starting port ('${startingPort}') without finding any active ports.`,
    );
}
