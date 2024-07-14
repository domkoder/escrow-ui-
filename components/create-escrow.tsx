import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function CreateEscrow() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="default">Create Escrow</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Create escrow</DialogTitle>
					<DialogDescription>Please fill in the form</DialogDescription>
				</DialogHeader>
				<form>
					<div className="grid w-full items-center gap-4">
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="name">Your token mint address</Label>
							<Input id="name" />
						</div>

						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="name">Receiver token mint address</Label>
							<Input id="name" />
						</div>

						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="name">Your token amount</Label>
							<Input id="name" />
						</div>

						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="name">Receiver token amount</Label>
							<Input id="name" />
						</div>
					</div>
				</form>
				<DialogFooter>
					<Button type="submit">Create</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
