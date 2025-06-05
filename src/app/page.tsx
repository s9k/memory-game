import { PlayerLoggedGuard, PlayerLoginForm } from "@/domains/player/widgets";

export default function LoginPage() {
  return (
    <PlayerLoggedGuard mode="logged-out">
      <PlayerLoginForm />
    </PlayerLoggedGuard>
  );
}
