import { getCareerDirectionById } from "@/db/queries/career-direction/get-career-direction-by-id";
import { CareerResultsView } from "@/views/career/career-results-view";

export default async function CareerDirectionResultPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const careerDirectionId = parseInt(id, 10);
  const careerDirection = await getCareerDirectionById(careerDirectionId);

  if (!careerDirection) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-zinc-900 mb-2">
            Career Direction not found
          </h1>
          <p className="text-zinc-600">
            The career direction you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

  return <CareerResultsView data={careerDirection} />;
}
