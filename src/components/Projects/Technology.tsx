export default function Technology({ technology }: { technology: string }) {
    return (
        <div className="py-1 px-2 text-primary-900 bg-secondary-200 rounded-md shadow-md">
            <p>{ technology }</p>
        </div>
    )
}