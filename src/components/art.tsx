import styles from 'styles.all.css';

export default function CommissionedArt(params: { imageName: string, imageSrc: string, artistUrl: string, artistName: string }) {
    switch (params.artistName) {
        case "Ruri":
            return (
                <>
                    <img alt={params.imageName} src={params.imageSrc} />
                    <div className="image-caption">{params.imageName} by <a href="https://ruricommission.carrd.co/" target='_blank'>{params.artistName}</a></div>
                </>
            )
        default:
            return (
                <>
                    <img alt={params.imageName} src={params.imageSrc} />
                    <div className="image-caption">{params.imageName} by <a href={params.artistUrl} target='_blank'>{params.artistName}</a></div>
                </>
            )
    }

}
export function ChieranWomanRef()
{return (<CommissionedArt imageName="Chieran Woman" imageSrc="/img/Chieran-Woman.png" artistUrl="" artistName="Ruri" />)}
export function WaerraniWomanRef()
{return (<CommissionedArt imageName="Waerrani Woman" imageSrc="/img/Waerrani-Woman.png" artistUrl="" artistName="Ruri" />)}