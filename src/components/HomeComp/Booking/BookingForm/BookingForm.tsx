"use client"
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label';
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";


const BookingForm = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
        <div>
            <p className="text-white">Fields marked with an <span className="text-red-500">*</span> are required</p>
            <form className="px-2 flex flex-col gap-3.5">
                <div>
                    <Label className="py-2 text-white font-bold text-lg" htmlFor="name">Name<span className="text-red-500">*</span></Label>
                    <Input className="bg-white px-3 py-6 outline-0 ring-0 hover:ring-0 focus-visible:ring-0 rounded-none" type="text" placeholder="" />
                </div>
                <div>
                    <Label className="py-2 text-white font-bold text-lg" htmlFor="name">Phone<span className="text-red-500">*</span></Label>
                    <Input className="bg-white px-3 py-6 outline-0 ring-0 hover:ring-0 focus-visible:ring-0 rounded-none" type="text" placeholder="" />
                </div>
                <div>
                    <Label className="py-2 text-white font-bold text-lg" htmlFor="name">Email<span className="text-red-500">*</span></Label>
                    <Input className="bg-white px-3 py-6 outline-0 ring-0 hover:ring-0 focus-visible:ring-0 rounded-none" type="email" placeholder="" />
                </div>
                <div>
                    <Label className="py-2 text-white font-bold text-lg" htmlFor="name">Preferred Date & Time 1<span className="text-red-500">*</span></Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full justify-start text-left font-normal bg-white px-3 py-6 outline-0 ring-0 hover:ring-0 focus-visible:ring-0 rounded-none",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>
                <div>
                    <Label className="py-2 text-white font-bold text-lg" htmlFor="name">Preferred Date & Time 2<span className="text-red-500">*</span></Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full justify-start text-left font-normal bg-white px-3 py-6 outline-0 ring-0 hover:ring-0 focus-visible:ring-0 rounded-none",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>
                <div>
                    <Label className="py-2 text-white font-bold text-lg" htmlFor="name">I would like to<span className="text-red-500">*</span></Label>
                    <Select>
                        <SelectTrigger className="w-full bg-white px-3 py-6 outline-0 ring-0 hover:ring-0 focus-visible:ring-0 rounded-none">
                            <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent className="rounded-none">
                            <SelectItem value="hair">HAIR</SelectItem>
                            <SelectItem value="spa">SPA</SelectItem>
                            <SelectItem value="nail">NAIL</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Label className="py-2 text-white font-bold text-lg" htmlFor="name">Message<span className="text-red-500">*</span></Label>
                    <Textarea className="bg-white px-3 py-6 outline-0 ring-0 hover:ring-0 focus-visible:ring-0 rounded-none min-h-48" />
                </div>
                <div className="py-10">
                    <input className="uppercase text-white font-medium text-xl hover:bg-[#ff52f6] hover:text-[#6b6b86] cursor-pointer rounded px-4 py-2.5 transition-all duration-700" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default BookingForm;