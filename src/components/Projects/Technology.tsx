export default function Technology({ technology }: { technology: string }) {
    return (
        <div className="py-1 px-2 text-primary bg-secondary rounded-md text-lg">
            <p>{ technology }</p>
        </div>
    )
}