import { FormControl, NativeSelect } from '@material-ui/core';
import React from 'react';
import { useCountriesApi } from '../hooks';
interface CountryPickerProps {
	onChange: (value: string) => void;
}
export const CountryPicker = (props: CountryPickerProps) => {
	const countries = useCountriesApi();

	return (
		<FormControl>
			<NativeSelect defaultValue='' onChange={(e: any) => props.onChange(e.target.value)}>
				<option value=''>Global</option>
				{countries.length
					? countries.map((c: any, i) => (
							<option key={i} value={c.name}>
								{c.name}
							</option>
					  ))
					: null}
			</NativeSelect>
		</FormControl>
	);
};
